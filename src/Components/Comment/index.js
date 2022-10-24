import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .user{
        display: flex;
        margin-bottom: 1em;
        .user-data{
            display: flex;
            flex-direction: column;
            margin-left: 1em;
            .date{
                font-size: .75em;
                color: var(secondary);
            }
        }
    }
    p{
        //font-size: .75em;
    }
    .link{
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Comment = (props) => {

    const [showMore, setShowMore] = React.useState(false);

    return (
        <CommentWrapper>
            <div className='user'>
                <Avatar 
                    size={'large'}
                    style={{backgroundColor:'var(--primary)', color:'var(--white)'}}
                    src={props.userImage}
                >
                    {
                        props.userName.charAt(0)
                    }
                </Avatar>
                <div className='user-data'>
                    <span>{props.userName}</span>
                    <span className='date'>{props.date}</span>
                </div>
            </div>
            <p>
                {props.comment}
            </p>
            {
                showMore?
                <p>
                    {
                        props.more
                    }
                </p>
                :
                <>
                </>
            }
            {
                props.more?
                <>
                    {
                        showMore?
                        <div className='link' onClick={()=>setShowMore(!showMore)}>Ver menos</div>
                        :
                        <div className='link' onClick={()=>setShowMore(!showMore)}>Ver mas</div>
                    }
                </>
                :
                <></>
            }
        </CommentWrapper>
    )
}

export default Comment;