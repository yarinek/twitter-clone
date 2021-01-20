import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src='https://avatars0.githubusercontent.com/u/66006459?s=460&u=b97ee78a4bbe330f7693ffdc7691d093049a8348&v=4' />
                    <input type='text' placeholder="What's happening?" />
                </div>
                <input className="tweetBox__inputImage" type='text' placeholder="Enter image URL" />

                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div >
    )
}

export default TweetBox
