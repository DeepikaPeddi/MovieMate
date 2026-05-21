package com.moviemate.backend.service;

import com.moviemate.backend.dto.LoginRequest;
import com.moviemate.backend.dto.SignupRequest;
import com.moviemate.backend.entity.User;
import com.moviemate.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.moviemate.backend.security.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public String registerUser(SignupRequest request) {

        try {

            if (userRepository.findByEmail(request.getEmail()).isPresent()) {
                return "Email already exists!";
            }

            User user = new User();
            user.setName(request.getName());
            user.setEmail(request.getEmail());

            user.setPassword(
                    passwordEncoder.encode(request.getPassword())
            );

            userRepository.save(user);

            return "User registered successfully!";

        } catch (Exception e) {

            e.printStackTrace();

            return "Signup Failed: " + e.getMessage();
        }
    }

    // LOGIN METHOD
    public String loginUser(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            throw new RuntimeException("User not found!");
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException("Invalid password!");
        }

        return jwtUtil.generateToken(user.getEmail());
    }
}