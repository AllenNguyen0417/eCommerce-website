package com.ecommerce.ecommerce.model.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    User user;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Status register(User newUser) {
        List<User> users = userRepository.findAll();
        String newEmail = newUser.getEmail();
        for (User user : users) {
            if (user.equals(newUser)) {
                return Status.USER_ALREADY_EXISTS;
            }
            if (user.getEmail().equals(newEmail)) {
                return Status.EMAIL_ALREADY_EXISTS;
            }

        }
        userRepository.save(newUser);
        return Status.SUCCESS;
    }

    @Override
    public Status login(User user) {

        List<User> users = userRepository.findAll();

        String username = user.getUsername();
        String password = user.getPassword();
        System.out.println("username input: " + username);
        System.out.println("password input: " + password);

        for(User u: users) {
            if(u.getUsername().equals(username)) {
                if (u.getPassword().equals(password)) {
                    return Status.SUCCESS;
                }
            }
            else {
                continue;
            }
        }
        return Status.FAILURE;
    }

}
