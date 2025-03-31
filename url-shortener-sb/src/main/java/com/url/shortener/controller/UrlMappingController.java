package com.url.shortener.controller;

import com.url.shortener.dtos.ClickEventDTO;
import com.url.shortener.dtos.UrlMappingDTO;
import com.url.shortener.models.User;
import com.url.shortener.service.UrlMappingService;
import com.url.shortener.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

// shorturl: "https://<domain>/<slug>" => https://abc.com/QuUM2ArH  ----Redirect----> https://example.com

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {
    private UrlMappingService urlMappingService;
    private UserService userService;

    // post request => {"originalUrl":"https://example.com"}
    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")  //method level security //Spring Security checks if the currently authenticated user has the USER role before allowing access to the method.
    public ResponseEntity<UrlMappingDTO> createShortUrl(@RequestBody Map<String,String> request,
                                                        Principal principal) { //Principal is an interface in Java that represents the currently authenticated user's identity. It is typically used to retrieve details about the logged-in user in a secure application. When a user logs in, their authentication details are stored in the SecurityContext. The Principal is part of this context.
        String originalUrl =request.get("originalUrl");
        User user=userService.findByUsername(principal.getName());
        UrlMappingDTO urlMappingDTO= urlMappingService.createShortUrl(originalUrl,user);

        return ResponseEntity.ok(urlMappingDTO);
    }

    //get Request
    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingDTO>> createShortUrl(Principal principal){  // get short URLS
        User user = userService.findByUsername(principal.getName());
        List<UrlMappingDTO> urls = urlMappingService.getUrlsByUser(user);

        return ResponseEntity.ok(urls);
    }

    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventDTO>> getUrlAnalytics(@PathVariable String shortUrl,
                                                               @RequestParam("startDate") String startDate, // input date format=> 2024-12-01T00:00:00
                                                               @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime start= LocalDateTime.parse(startDate,formatter);
        LocalDateTime end= LocalDateTime.parse(endDate,formatter);

        List<ClickEventDTO> clickEventDTOS= urlMappingService.getClickEventsByDate(shortUrl,start,end);
        return ResponseEntity.ok(clickEventDTOS);
    }

    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate, Long>> getTotalClicksByDate(Principal principal,
                                                                     @RequestParam("startDate") String startDate, // input date format=> 2024-12-01T00:00:00
                                                                     @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
        User user = userService.findByUsername(principal.getName());
        LocalDate start= LocalDate.parse(startDate,formatter);
        LocalDate end= LocalDate.parse(endDate,formatter);

        Map<LocalDate, Long> totalClicks= urlMappingService.getTotalClicksByUserAndDate(user,start,end);
        return ResponseEntity.ok(totalClicks);
    }
}
