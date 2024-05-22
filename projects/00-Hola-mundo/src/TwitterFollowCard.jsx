import { useState } from 'react'
export function TwitterFollowCard({children, userName = 'Unknow'}) { 
    let logo = "logo.svg"
    // add @
    const addAt = (userName) => `@${userName}`

    // status
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    // add class to edit button style
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                //src="https://vitejs.dev/logo.svg"
                src = {`https://vitejs.dev/${logo}`} 
                alt="Vite logo"/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
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