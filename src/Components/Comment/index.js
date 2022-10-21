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
                >
                    U    
                </Avatar>
                <div className='user-data'>
                    <span>John Doe</span>
                    <span className='date'>Date</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, diam nec egestas congue, dolor odio lacinia ipsum, quis imperdiet ante eros a leo. Sed luctus urna consectetur dui mollis pretium. Sed commodo, nunc ut pretium aliquam, erat eros porta nisl, at tempus dolor elit eu nisi. Vestibulum feugiat, lorem nec lobortis bibendum, ligula arcu gravida lectus, sit amet pellentesque ante metus ut nisi. Fusce at tortor justo. In iaculis justo convallis mollis commodo. Sed pretium lectus et tristique aliquet. Sed purus augue, aliquam quis eros vitae, tincidunt efficitur magna. 
            </p>
            {
                showMore?
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, diam nec egestas congue, dolor odio lacinia ipsum, quis imperdiet ante eros a leo. Sed luctus urna consectetur dui mollis pretium. Sed commodo, nunc ut pretium aliquam, erat eros porta nisl, at tempus dolor elit eu nisi. Vestibulum feugiat, lorem nec lobortis bibendum, ligula arcu gravida lectus, sit amet pellentesque ante metus ut nisi. Fusce at tortor justo. In iaculis justo convallis mollis commodo. Sed pretium lectus et tristique aliquet. Sed purus augue, aliquam quis eros vitae, tincidunt efficitur magna. 
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