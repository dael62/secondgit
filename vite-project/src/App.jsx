import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className="App">
        <TwitterFollowCard isFollowing userName="samurai">Jorge Daniel Gallo</TwitterFollowCard>
        
        <TwitterFollowCard isFollowing={false} userName="midudev">Miguel Angel Duran</TwitterFollowCard>
        
        </ section>

    )
    
}