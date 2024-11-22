import {useRef} from 'react'
import Logout from '../components/Logout.jsx'
import "../css/Login.css"

export const Login =()=>{


    const usuario=useRef();
    const senha=useRef();
     
    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha =sessionStorage.getItem("senha");

    const handleLogin=()=>{
        if(usuario.current.value =="Admin" && senha.current.value =="123456"){
           
            //criando um token de autenticação
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);

            sessionStorage.setItem("usuario","Admin");
            sessionStorage.setItem("senha",token)
        }
        else{
            alert("Usuario/Senha INVÁLIDO")
        }
    }
    


    return(
        <>
            <section className='login'>

            {getUsuario && getSenha ? (
                <Logout/>
            ):
              <div className='bg-login'>
                <form className='form-login' onSubmit={handleLogin}>
                    <div>
                      <p>
                        Usuário:</p>
                        <p><input type="text" placeholder="Digite seu usuário" ref={usuario} />
                    </p>
                    <p>Senha:</p>
                    <p><input type="password" placeholder="Digite sua senha" ref={senha} />
                    </p>
                    </div>

                    <button type="submit">Entrar</button>
                </form>
              </div>
                    }
            </section>
        
        </>
    )
}