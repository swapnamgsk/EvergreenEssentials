package com.Sanjivini.Sanjivini.service.Impl;

import com.Sanjivini.Sanjivini.model.Brain;
import com.Sanjivini.Sanjivini.repository.BrainRepository;
import com.Sanjivini.Sanjivini.service.BrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class brainServiceImpl implements BrainService {

    @Autowired
    BrainRepository brainRepository;

    @Override
    public Brain saveBrain(Brain brain) {
        return brainRepository.save(brain);
    }

    @Override
    public List<Brain> getAllBrains() {
        return brainRepository.findAll();
    }

    @Override
    public Brain updateBrain(Brain brain) {
        return brainRepository.save(brain);
    }

    @Override
    public String deleteBrain(Integer id) {
        brainRepository.deleteById(id);
        return "Brain details deleted successfully";
    }

    @Override
    public Brain getOneBrain(Integer id) {
        return brainRepository.findById(id).orElse(null);
    }

    @Override
    public List<Brain> getSearch(String name) {
        return brainRepository.getSearch(name);
    }
}
