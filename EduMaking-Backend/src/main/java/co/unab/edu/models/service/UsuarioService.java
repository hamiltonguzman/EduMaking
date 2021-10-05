package co.unab.edu.models.service;

import java.util.List;
import java.util.Optional;
import co.unab.edu.models.entity.Usuario;

public interface UsuarioService {
	public Optional<Usuario> findById(Integer id);
	public List<Usuario> findAll();
	public Usuario save(Usuario usuario);
	public void deleteById(Integer id);
	public Integer ConsultarPorCredenciales(String contraseņa, String email);
}
