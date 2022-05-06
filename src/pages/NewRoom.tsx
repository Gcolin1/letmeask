
import { Link } from 'react-router-dom'
import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';

export function NewRoom(){
    const {user} = useContext(AuthContext);

    const history = useHistory()

    function navigateToHome(){
        history.push("/");
        history.go(0);
    }


    return(
        <div id='page-auth'>
            <aside>
                <img src={illustration} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
               
                <div className='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                   
                    <form action="">
                        <input type="text" 
                        placeholder='Nome da sala'
                        />
                         <Button type='submit'>
                            Criar sala
                         </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link onClick={navigateToHome} to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}