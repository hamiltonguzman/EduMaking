package co.unab.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import co.unab.edu.models.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	@Query("select u.id_Usuario from Usuarios u where u.pwd_usuario=?1 and u.email_usuario=?2")
	public Integer ConsultarPorCredenciales(String ctr,String email);
}
