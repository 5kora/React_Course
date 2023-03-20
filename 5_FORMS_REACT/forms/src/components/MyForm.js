import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 -  Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [role, setRole] = useState(user ? user.role : "")
  const [bio, setBio] = useState(user ? user.role : "")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form!!")
    console.log(email, name, bio, role)
    // 7 - Limpar form
    setEmail("")
    setName("")
    setBio("")
    setRole("")
  };

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name='name' value={name} placeholder='Digite o seu nome' onChange={(e) => { setName(e.target.value) }} />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input type="email" name='email' value={email} placeholder='Digite seu e-mail' onChange={(e) => { setEmail(e.target.value) }} />
        </label>
        {/* 8 - Text Area */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" value={bio} onChange={(e) => { setBio(e.target.value) }} placeholder='Descrição Usuario'></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Função:</span>
          <select name="role" onChange={(e) => {setRole(e.target.value)}}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm