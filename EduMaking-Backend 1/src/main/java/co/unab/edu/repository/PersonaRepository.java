package co.unab.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import co.unab.edu.models.entity.Persona;

public interface PersonaRepository extends JpaRepository<Persona, Integer> {

}
