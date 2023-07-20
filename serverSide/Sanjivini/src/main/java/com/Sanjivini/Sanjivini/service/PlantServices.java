package com.Sanjivini.Sanjivini.service;

import com.Sanjivini.Sanjivini.model.plantDetails;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface plantDetailsServices {
    public plantDetails create(plantDetails Information);

    public List<plantDetails> getAllplantDetails();

    public plantDetails update(plantDetails plantDetails);

    public String deleteplantDetails(plantDetails plantDetails);
}
