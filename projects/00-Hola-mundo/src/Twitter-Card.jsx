import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'dKelly',
    name: 'Dollie Kelley',
    isFollowing : true
  },
  {
    userName: 'eButcher',
    name: 'Elmer Butler',
    isFollowing : true
  },
  {
    userName: 'chandler',
    name: 'Lillie Chandler',
    isFollowing : true
  },
  {
    userName: 'eDan',
    name: 'Ernest Daniels',
    isFollowing : true
  }
]

export function App() {
  return (
    <section className='App'>
        {
          users.map(user => {
          const { userName, name, isFollowing } = user
            return (
              <TwitterFollowCard
                key={userName}
                userName={userName} 
                initialIsFollowing={isFollowing}
              >
                {name}
              </TwitterFollowCard>
            )
          })
        }

        {/* 
        <TwitterFollowCard userName="Nicolas Pinochet" initialIsFollowing={true}>
          Nicolas Pinochet Flores
        </TwitterFollowCard>

        <TwitterFollowCard userName="Andres Flores">
          Andres Miguel Flores
        </TwitterFollowCard> */}        
    </section>
  )
}