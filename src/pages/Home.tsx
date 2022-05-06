import { useContext } from 'react';
import  {useHistory} from 'react-router-dom';
import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from "../assets/images/google-icon.svg";
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { AuthContext } from '../App';






export function Home(){

    const history = useHistory();
    const {user, signInWithGoogle} = useContext(AuthContext)
    
    

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle();
        }

            history.push("/rooms/new");
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
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="logo do google" />
                        crie sua sala com o google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form action="">
                        <input type="text" 
                        placeholder='Digite o codigo da sala'
                        />
                         <Button type='submit'>
                            Entrar na sala
                         </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}