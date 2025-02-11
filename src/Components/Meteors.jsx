
const Meteors = () => {
    return (
        <>
            {Array.from({ length: 60 }).map((_, idx) => (
                <div
                    key={idx}
                    className="meteor"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </>
    );
};

export default Meteors;