package co.unab.edu.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import co.unab.edu.models.entity.Persona;
import co.unab.edu.models.service.PersonaService;


@RestController
@RequestMapping("/api/personas")
public class PersonaController {

	@Autowired PersonaService personaService;
	
	@GetMapping("{id}")
	public Optional<Persona> buscarPorId(@PathVariable Integer id) {
		return personaService.findById(id);
	}
	
	@GetMapping("/listar")
	public List<Persona> listar(){
		return personaService.findAll();
	}
	
	@PostMapping
	public Persona guardar(@RequestBody  Persona persona) {
		return personaService.save(persona);
	}
	
	@DeleteMapping("{id}")
	public void eliminar(@PathVariable Integer id) {
		personaService.deleteById(id);
	}
	
	@PutMapping("/actualizar/{id}")
	public Persona actualizar(@RequestBody Persona persona, @PathVariable Integer id) {
		
		Persona eEnBD= personaService.findById(id).get();
		eEnBD.setIdPersona(persona.getIdPersona());
		eEnBD.setTipoDoc(persona.getTipoDoc());
		eEnBD.setNombreEmpresa(persona.getNombreEmpresa());
		eEnBD.setTelEmpresa(persona.getTelEmpresa());
		eEnBD.setEmailEmpresa(persona.getEmailEmpresa());
		eEnBD.setNombrePersona(persona.getNombrePersona());
		eEnBD.setTelPersona(persona.getTelPersona());
		eEnBD.setEmailPersona(persona.getEmailPersona());
		eEnBD.setCargoPersona(persona.getCargoPersona());
		eEnBD.setProfesion(persona.getProfesion());
		eEnBD.setClasif(persona.getClasif());
		eEnBD.setPais(persona.getPais());
		eEnBD.setCiudad(persona.getCiudad());
		eEnBD.setRutPersona(persona.getRutPersona());
		eEnBD.setInteres(persona.getInteres());
		eEnBD.setEstado(persona.getEstado());
						
		personaService.save(eEnBD);
		return persona;
		
	}
	
}