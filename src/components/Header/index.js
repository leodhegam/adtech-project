import React from 'react';	
import ceo from '../../img/ceo1.jpg'
import Contact from '../Contact/index'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import './styles.css';
export default function Header() {
  return (
    <>
	<Contact/>
	<Navbar/>
    <section className="home_banner">
        <div className="banner_inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="banner_content">
							<h2>
								Empresa Junior voltada à soluções tecnológicas
							</h2>
							<p className="text-justify">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim.
								sed do eiusmod tempor incididunt.
							</p>
							
						</div>
					</div>
						
				</div>
			</div>
		</div>
	</section>

	<section >
<div className="container mt-1">
<div className="row m-0">
			<div className="col-sm-6">
				<div className="card d-flex align-items-center ">
					<div className="card-body ">
				
					<h5 className="card-title text-left">PRESIDÊNCIA</h5>
						<div className="row text-center  ">
						
							<div className="p-2 m-2 bg-warning">
							<img src={ceo} alt="" srcSet=""/>
							<p className="p-2 card-text">CEO</p>
							</div>
							<div className="p-2 bg-danger m-2">
							<img src={ceo}/>
							<p className="p-2">COO</p>
							</div>
						</div>
					</div>
				</div>
  			</div>
			  <div className="col-sm-6">
				<div className="card d-flex align-items-center ">
					<div className="card-body ">
				
					<h5 className="card-title text-left">DIRETORIA</h5>
						<div className="row text-center  ">
						
							<div className="p-2 m-2 bg-warning">
							<img src={ceo} alt="" srcSet=""/>
							<p className="p-2 card-text">CEO</p>
							</div>
							<div className="p-2 m-2 bg-warning">
							<img src={ceo} alt="" srcSet=""/>
							<p className="p-2 card-text">CEO</p>
							</div>
							<div className="p-2 m-2 bg-warning">
							<img src={ceo} alt="" srcSet=""/>
							<p className="p-2 card-text">CEO</p>
							</div>
							<div className="p-2 bg-danger m-2">
							<img src={ceo}/>
							<p className="p-2">COO</p>
							</div>
						</div>
					</div>
				</div>
  			</div>
</div>
</div>
	</section>
	<Footer/>
    </>
  );
}
