import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <>
    <section className='App'>
        <TwitterFollowCard userName="Nicolas Pinochet">
            Nicolas Pinochet Flores
        </TwitterFollowCard>

        <TwitterFollowCard userName="Andres Flores">
        Andres Miguel Flores
        </TwitterFollowCard>

        {/* <TwitterFollowCard 
        isFollowing={false}
        userName="Patricio Rivera" 
        name="Patricio River Munich"/>
        */}

    </section>
    </>
  )
}