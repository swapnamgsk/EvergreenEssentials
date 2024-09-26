package com.Sanjivini.Sanjivini.service;

import com.Sanjivini.Sanjivini.model.Plant;
import org.springframework.stereotype.Service;

@Service
public interface plantService {

    public  Plant savePlant(Plant plant);
}
