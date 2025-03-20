package com.url.shortener.service;

import com.url.shortener.dtos.LoginRequest;
import com.url.shortener.models.User;
import com.url.shortener.repository.UserRepository;
import com.url.shortener.security.jwt.JwtAuthenticationResponse;
import com.url.shortener.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class UserService {

    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private AuthenticationManager authenticationManager;
    private JwtUtils jwtUtils;

    public User registerUser(User user){
        User isUsernameExist= findByUsername(user.getUsername());
        User isEmailExist= userRepository.findByEmail(user.getEmail());

        if(isUsernameExist != null || isEmailExist !=null){
            throw new RuntimeException("Username or Email already exist!");
        }else {
            user.setPassword(passwordEncoder.encode(user.getPassword())); // encrypt the password before adding to the DB
            return userRepository.save(user);
        }
    }

    //login
    public JwtAuthenticationResponse authenticateUser(LoginRequest loginRequest){
        // this will authenticate the user based on their username and password by authenticationManager.authenticate(<username,password obj which is understood by spring security>)
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication((authentication));
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        String jwt= jwtUtils.generateToken(userDetails);
        return new JwtAuthenticationResponse(jwt);
    }

    public User findByUsername(String name) {
//        return userRepository.findByUsername(name).orElseThrow(
//                () -> new UsernameNotFoundException("User not found with username : " + name)
//        );
        return userRepository.findByUsername(name).orElse(null);
    }
}
