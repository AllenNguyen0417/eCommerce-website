package com.ecommerce.ecommerce.model.users;

import java.util.List;

public interface UserService {
    Status register(User user);
    Status login(User user);

}
