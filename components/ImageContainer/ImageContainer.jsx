

export const ImageContainer = ({image, type}) => {
    const topTen = {
        backgroundImage: `url(${image})`,
        width: '300px',
        height: '450px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px'
    }

    const mainSlider = {
        backgroundImage: `url(${image})`,
        width: '600px',
        height: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const myClass = type === 'mainSlider' ? mainSlider : topTen;

    return (
        <div style={myClass}></div>
    )
}

