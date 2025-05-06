import React from "react";

export default function Login() {
    return (
            <div style={{
              margin: 0,
              fontFamily: 'Arial, sans-serif',
              background: 'rgb(11, 11, 11)',
              display: 'flex',
              height: '100vh',
              boxShadow: '10px 0 10px rgba(0, 0, 0, 1)',
              
            }}>
              <div style={{
                flex: 1,
                padding: 40,
                background: 'rgb(255, 255, 255)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width:"70vh"
                
              }}>
                <h1 style={{ color: '#561fec' }}>Login</h1>
                <p>Bem vindo de volta! Por favor realize seu login.</p>
        
                <form>
                  <label>Endereço de Email</label>
                  <input
                    type="email"
                    placeholder="joao@123.com"
                    required
                    style={{
                      width: '100%',
                      padding: 10,
                      margin: '10px 0',
                      border: '1px solid #ccc',
                      
                   
                    }}
                  />
        
                  <label>Senha</label>
                  <input
                    type="password"
                    placeholder="******"
                    required
                    style={{
                      width: '100%',
                      padding: 10,
                      margin: '5px 0',
                      border: '1px solid #ccc',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    }}
                  />
        
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <label>
                      <input type="checkbox" /> Lembre-me
                    </label>
                    <a href="#" style={{ textDecoration: 'none', color: '#561fec' }}>
                      Esqueci minha senha
                    </a>
                  </div>
        
                  <button type="submit" style={{
                    width: '100%',
                    padding: 10,
                    background: '#561fec',
                    color: 'white',
                    border: 'none',
                    marginTop: 10,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                  }}>
                    Login
                  </button>
        
                  <button type="button" style={{
                    width: '100%',
                    padding: 10,
                    background: 'white',
                    color: '#561fec',
                    border: '1px solid #3A3BFF',
                    marginTop: 10,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  }}>
                    Cadastrar
                  </button>
                </form>
        
                <p style={{ textAlign: 'center', marginTop: 20 }}>Faça login com</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 10
                }}>
                  {['Facebook', 'LinkedIn', 'Google'].map((rede) => (
                    <a key={rede} href="#" style={{ textDecoration: 'none', color: '#561fec' }}>
                      {rede}
                    </a>
                  ))}
                </div>
              </div>
        
              <div style={{ width: '60vw' }}>
                <div style={{
                  transition: 'text-decoration 0.2s ease-in-out',
                  marginTop: 30,
                  fontSize: 25,
                  display: 'flex',
                  gap: 30,
                  justifyContent: 'center'
                }}>
                  <a href="#" style={{ textDecoration: 'none', color: '#561fec', borderBottom: '2px solidrgb(200, 27, 125)' }}>
                    Home
                  </a>
                  {['Sobre', 'Contatos', 'Planos'].map((item) => (
                    <a key={item} href="#" style={{ textDecoration: 'none', color: 'white' }}>
                      {item}
                    </a>
                  ))}
                </div>
        
                <div>
                  <img src="compras_espelhada_final.png" alt="comprars.png" style={{ height: '661px',width: '100%', marginTop: 0 }} />
                </div>
              </div>
            </div>
          );
        }