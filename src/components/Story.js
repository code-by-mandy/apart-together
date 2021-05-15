/*jsx for each story post*/

const Story = ({story}) => {

    const noCustom = story.emotion.slice(0, -12);

    return (
        <>
            <li tabIndex="0">
                    <h3>
                        This story is about feeling 

                            {story.custom && noCustom
                            ? ` ${story.custom} and ${noCustom}`
                            : ` ${story.custom ||  story.emotion}`
                            }
                    </h3>
                    <p>{story.post}</p>
            </li>
        </>
    )
}

export default Story;