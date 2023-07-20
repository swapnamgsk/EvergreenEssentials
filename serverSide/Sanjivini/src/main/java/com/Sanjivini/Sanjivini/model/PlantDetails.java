package com.Sanjivini.Sanjivini.model;

import jakarta.persistence.*;

@Entity
public class plantDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int plant_id;

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

    public String getPlant_description() {
        return plant_description;
    }

    public void setPlant_description(String plant_description) {
        this.plant_description = plant_description;
    }

    public String getPlant_video() {
        return plant_video;
    }

    public void setPlant_video(String plant_video) {
        this.plant_video = plant_video;
    }

    @Column
    private String plant_name;

    @Column
    private String plant_image;

    @Column
    private String plant_description;

    @Column
    private String plant_video;

}

