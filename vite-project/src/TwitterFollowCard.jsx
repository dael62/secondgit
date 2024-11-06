import { useState } from "react" 
export function TwitterFollowCard({ children,userName }) {
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
      ? 'tw-follow-card-button is-following'
      : 'tw-follow-card-button'

    const handleClick= () => {
        setIsFollowing(!isFollowing)
    }
   
    return (
        <article className='tw-follow-card'>
        <header className='tw-follow-card-header'>
            <img 
            alt="El avatar"
            className='tw-follow-card-avatar'
            src={`https://unavatar.io/${userName}`}  />
            <div className='tw-follow-card-info'>
                <strong>{children}</strong>
                <span className='tw-follow-card-infoUsername'>@george</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>  
    )
}