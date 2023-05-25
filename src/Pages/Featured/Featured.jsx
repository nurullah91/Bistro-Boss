import SecHeading from '../../Components/SecHeading';
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <section className='Featured-item bg-fixed  text-white'>

            <div className='py-10 bg-black bg-opacity-60'>
                <SecHeading subHeading='Check it out' heading='Featured item'></SecHeading>
            </div>

            <div className='md:flex justify-center items-center py-20 px-12 lg:px-36 bg-black bg-opacity-60 mb-12'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md: ml-10'>
                    <p className=''>June 12, 2023</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates magni autem veritatis! Labore, temporibus exercitationem. Fuga sit at maiores et consequuntur vel possimus aut deleniti eligendi facilis, veniam ex, dignissimos nihil dolores. Ipsam hic sit ut labore cupiditate reprehenderit voluptatum harum saepe quod ad voluptate, aliquid placeat a nulla numquam.</p>
                    <button className='btn btn-outline mt-8 text-white border-b-4 border-0'>Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;