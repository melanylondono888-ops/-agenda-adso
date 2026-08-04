import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    // Validamos que los campos obligatorios no estén vacíos ni contengan solo espacios
    if (!form.nombre.trim() || !form.telefono.trim() || !form.correo.trim()) {
      return;
    }

    // Opcional: enviamos los datos limpiando espacios sobrantes con .trim()
    onAgregar({
      nombre: form.nombre.trim(),
      telefono: form.telefono.trim(),
      correo: form.correo.trim(),
      etiqueta: form.etiqueta.trim(),
    });

    // Limpiamos el formulario
    setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
  };

  return (
    <form className="form-contacto" onSubmit={onSubmit}>
      <label>Nombre *</label>
      <input
        name="nombre"
        value={form.nombre}
        onChange={onChange}
        placeholder="Ej: Ana López"
      />
      <label>Teléfono *</label>
      <input
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        placeholder="Ej: 300 123 4567"
      />
      <label>Correo *</label>
      <input
        name="correo"
        type="email" // Añadido type="email" para validación nativa del navegador
        value={form.correo}
        onChange={onChange}
        placeholder="Ej: ana@sena.edu.co"
      />
      <label>Etiqueta (opcional)</label>
      <input
        name="etiqueta"
        value={form.etiqueta}
        onChange={onChange}
        placeholder="Ej: Trabajo"
      />
      <button className="btn-primario" type="submit">Agregar contacto</button>
    </form>
  );
}