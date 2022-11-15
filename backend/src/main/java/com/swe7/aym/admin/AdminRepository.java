package com.swe7.aym.admin;

import com.swe7.aym.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Long> findByUser(User user);
}
