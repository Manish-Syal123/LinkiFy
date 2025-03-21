package com.url.shortener.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class ClickEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime clickDate;

    @ManyToOne //multiple clicks belongs to single url
    @JoinColumn(name = "url_mapping_id")
    private UrlMapping urlMapping;  // only joining the UrlMapping's 'id' column from the complete UrlMapping obj
}
