package com.moviemate.backend.controller;

import com.moviemate.backend.dto.LoginRequest;
import com.moviemate.backend.dto.SignupRequest;
import com.moviemate.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.moviemate.backend.dto.AuthResponse;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

//    @PostMapping("/signup")
//    public String signup(@RequestBody SignupRequest request) {
//
//        return authService.registerUser(request);
//    }

    @PostMapping("/signup")
    public AuthResponse signup(
            @RequestBody SignupRequest request
    ) {

        authService.registerUser(request);

        LoginRequest loginRequest =
                new LoginRequest();

        loginRequest.setEmail(
                request.getEmail()
        );

        loginRequest.setPassword(
                request.getPassword()
        );

        String token =
                authService.loginUser(loginRequest);

        return new AuthResponse(
                token,
                "Signup Successful"
        );
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {

        String token = authService.loginUser(request);

        return new AuthResponse(token, "Login Successful");
    }
}