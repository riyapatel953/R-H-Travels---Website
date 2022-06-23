import React from 'react';
 
  function Content() {
    return (
       <div>
         <section className="">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="d-block w-100" src="assets/banner1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100 " src="assets/banner2.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src="assets/banner3.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   
 
        <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div className="row">
                <p className="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>   
          </div>   
        </section>   
 
        <section className="" id="destinations">   
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="assets/kerala.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Kerala</h4>
                          <p className="card-text text-secondary">Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="assets/Leh.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Leh</h4>
                          <p className="card-text text-secondary">Leh is known for its stunning scenic locales, Buddhist temples and pristine environment.Leh is also known as Little Tibet or the Land of Lamas.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="assets/jaipur.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Jaipur</h4>
                          <p className="card-text text-secondary">Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and what is now called the Old City, or “Pink City”.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  
 
 
       <section className=""  id="places">
        <div className="container">
          <div className="col-sm-12 col-md-12 mb-4">
             <h3 className="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div className="accordion" id="accordionExample">
        <div className="card">
         <div className="card-header" id="headingOne">
            <h2 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>
 
         <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
            A tourist attraction is a place of interest where tourists visit to see and interact with local art and artists; Festivals and events that celebrate local history, culture, harvest time, foods, music, or celebrities; Built attractions, such as monuments, amusement parks, zoos, or theme parks.
            </div>
         </div>
      </div>
      <div className="card">
         <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
            
            </div>
         </div>
      </div>
      <div className="card">
         <div className="card-header" id="headingThree">
            <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
            
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>
 
     
    <section className="bg-light mt-5" id="tourist">    
     <div className="container">
      <div className="row text-center">
        <div className="col-sm-12 col-md-12 mb-4">
            <h3 className="text-center mt-4 text-secondary">Tourist Opinions</h3>
         </div>
        <div className="col-md-4">
          <div className="testimonial mb-5">
           <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Anna</h4>
          <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
          <p className="font-weight-normal dark-grey-text">
         </p>
        </div>
      </div>
 
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Regan</h4>
          <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
          <p className="font-weight-normal dark-grey-text"></p>
        </div>
 
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Nancy</h4>
          <h6 className="font-weight-bold blue-text my-3">Toursit</h6>
          <p className="font-weight-normal dark-grey-text">
            </p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
   
  export default Content;