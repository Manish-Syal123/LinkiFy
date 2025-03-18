package com.url.shortener.security.jwt;

import com.url.shortener.service.UserDetailsImpl;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class JwtUtils {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private int jwtExpirationMs;

    // Authorization -> Bearer <TOKEN>
    // extract the JWT Token from the request header
    public String getJwtFromHeader(HttpServletRequest request){
        String bearerToken = request.getHeader("Authorization");
        if(bearerToken!=null && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7);
        }
        return null;
    }

    public String generateToken(UserDetailsImpl userDetails){
        String username = userDetails.getUsername();
        String roles = userDetails.getAuthorities().stream()
                .map(authority -> authority.getAuthority())
                .collect(Collectors.joining(","));
        return Jwts.builder()
                .subject(username) // embedding the username into subject
                .claim("roles", roles)
                .issuedAt(new Date())
                .expiration(new Date((new Date().getTime()+ jwtExpirationMs )))
                .signWith(Key())
                .compact();
    }

    public String getUserNameFromJwtToken(String token){
        return Jwts.parser()
                .verifyWith((SecretKey) Key()) // before extracting username first verify the token with secret key
                .build().parseSignedClaims(token)
                .getPayload().getSubject();  // .getsubject() because we have embaded the username into the subject while generating the token : see generateToken() method
    }

    // secret key
    private Key Key(){
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public boolean validateToken(String authToken){
        try {
            Jwts.parser().verifyWith((SecretKey) Key())
                    .build().parseSignedClaims(authToken);
            return true;
        } catch (JwtException e) {
            throw new RuntimeException(e);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException(e);
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
