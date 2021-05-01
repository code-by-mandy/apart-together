const Story = ({story}) => {
    return (
        <>
            <li tabIndex="0" key={story.date}>
                    <h3>This story is about feeling {story.emotion}</h3>
                    <p>{story.post}</p>
            </li>
        </>
    )
}

export default Story;