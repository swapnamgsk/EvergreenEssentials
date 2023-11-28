package com.Sanjivini.Sanjivini.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Heart")
public class heart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int plant_id;

    @Column
    private String plant_name;

    @Column
    private String plant_image;

    @Column
    private String plant_details;

    @Column
    private String plant_video;

    public int getPlant_id() {
        return plant_id;
    }

    public void setPlant_id(int plant_id) {
        this.plant_id = plant_id;
    }

    public String getPlant_name() {
        return plant_name;
    }

    public void setPlant_name(String plant_name) {
        this.plant_name = plant_name;
    }

    public String getPlant_image() {
        return plant_image;
    }

    public void setPlant_image(String plant_image) {
        this.plant_image = plant_image;
    }

    public String getPlant_details() {
        return plant_details;
    }

    public void setPlant_details(String plant_details) {
        this.plant_details = plant_details;
    }
}
