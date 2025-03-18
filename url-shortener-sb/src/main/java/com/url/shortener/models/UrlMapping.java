package com.url.shortener.models;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class UrlMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String originalUrl;
    private String shortUrl;
    private int clickCount = 0;
    private LocalDateTime createdDate;

    @ManyToOne  // many-to-one relation with User : many url mapping belongs to single user
    @JoinColumn(name = "user_id") //name of th foreign key column in this table
    private User user;

    @OneToMany(mappedBy = "urlMapping")  // one url can have multiple clicks
    private List<ClickEvent> clickEvents;
}
