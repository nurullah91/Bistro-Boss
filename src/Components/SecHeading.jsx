
const SecHeading = ({heading, subHeading}) => {
    return (
        <div className="lg:w-1/4 md:w-1/2 mx-auto text-center my-6">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SecHeading;