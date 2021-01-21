import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase';
import './TweetBox.css'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db
            .collection('posts')
            .add({
                displayName: 'Marek Sarnecki',
                username: 'yarinek',
                verified: true,
                text: tweetMessage,
                image: tweetImage,
                avatar: 'https://avatars0.githubusercontent.com/u/66006459?s=460&u=b97ee78a4bbe330f7693ffdc7691d093049a8348&v=4'
            })

        setTweetMessage("");
        setTweetImage('');
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src='https://avatars0.githubusercontent.com/u/66006459?s=460&u=b97ee78a4bbe330f7693ffdc7691d093049a8348&v=4' />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type='text'
                        placeholder="What's happening?"
                    />
                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__inputImage" type='text' placeholder="Enter image URL" />

                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div >
    )
}

export default TweetBox