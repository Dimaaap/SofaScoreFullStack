import React from 'react'
import "./Predictions.css";

const Predictions = () => {
  return (
    <div className="page-section">
        <div className="section-header">
            <h5>Прогнози</h5>
        </div>
        <hr />
        <div className="btns-row">
            <button className="section-btn active-btn">
                Активні
            </button>
            <button className="section-btn">
                Завершені
            </button>
        </div>
        <div className="section-body">
            <svg width="180" 
            height="180" 
            viewBox="0 0 180 180" 
            fill="" 
            xmlns="http://www.w3.org/2000/svg">
                <g fill="" 
                fill-rule="evenodd" 
                w="96px" 
                h="96px" 
                mb="lg">
                    <path fill="none" 
                    d="M0 0h180v180H0z"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="M71.171 11.19 25.905 5.465l-6.871 5.331-9.685 76.498 5.333 6.869 45.266 5.724 6.872-5.33 9.684-76.498z"></path>
                    <path 
                    d="M25.617 5.095 25.964 5l45.266 5.725.312.177 5.333 6.869.095.346-9.685 76.498-.178.312-6.871 5.33-.347.095-45.266-5.724-.311-.178-5.333-6.869-.095-.346 9.684-76.498.178-.311 6.871-5.331zm.422.86-6.565 5.092L9.84 87.16l5.095 6.562 44.88 5.676 6.565-5.093 9.636-76.113-5.095-6.561-44.881-5.677z" 
                    fill="#746D59"></path>
                    <path 
                    fill="#121212" 
                    fill-rule="nonzero" 
                    d="m71.171 11.265-6.877 5.331 5.327 6.869 6.883-5.332z"></path>
                    <path 
                    d="m64.006 16.226 6.878-5.332.658.084 5.333 6.868-.083.658-6.884 5.331-.658-.083-5.327-6.869.083-.657zm.946.453 4.752 6.128 6.142-4.757-4.758-6.128-6.136 4.757z" 
                    fill="#746D59"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="m66.82 94.825-6.878 5.331 9.685-76.498 6.877-5.33z"></path>
                    <path 
                    d="M70.068 23.91 60.55 99.092l5.829-4.518 9.518-75.183-5.83 4.519zm-.729-.622 6.878-5.331.753.43-9.685 76.497-.178.312-6.878 5.33-.752-.429L69.162 23.6l.177-.311z" 
                    fill="#746D59"></path>
                    <path d="m52.546 95.738-1.77 1.368-38.845-4.98-1.37-1.776 8.998-70.073 1.363-1.05.413-.319L60.18 23.89l1.369 1.768-8.997 70.08h-.006zM64.294 16.52l-45.267-5.725-6.877 5.331-9.685 76.498L7.798 99.5l45.26 5.724 6.878-5.33 9.678-76.498-5.327-6.875h.007z" 
                    fill="#FFF" 
                    fill-rule="nonzero"></path>
                    <path d="m18.74 10.426.346-.095 45.267 5.725-.028.436.333-.258 5.327 6.875.095.346L60.4 99.953l-.178.311-6.877 5.33-.346.096-45.26-5.725-.312-.178-5.333-6.875L2 92.566l9.685-76.498.178-.311 6.877-5.331zm45.295 6.535-44.874-5.675-6.57 5.093L2.955 92.49 8.05 99.06l44.875 5.677 6.57-5.094 9.63-76.113-5.09-6.568zm-42.987 1.577.346-.094 38.845 4.98.312.179 1.369 1.768.094.347-8.997 70.08-.253.222.069.088-1.77 1.369-.346.094-38.846-4.98-.311-.18-1.37-1.775-.093-.345 8.997-70.073.179-.312 1.362-1.05.413-.318zm.42.86-.26.2L20 20.53l-8.947 69.688 1.132 1.467 38.46 4.932 1.468-1.137 8.947-69.689-1.131-1.461-38.46-4.932z" 
                    fill="#746D59"></path>
                    <path fill="#E9E7D4" 
                    fill-rule="nonzero" 
                    d="m61.543 25.658-8.997 70.08-1.77 1.375-38.851-4.982-1.37-1.78 8.998-70.074 1.363-1.05.412-.319 38.845 4.982z"></path>
                    <path 
                    d="m21.042 18.538.346-.094 38.845 4.98.311.179 1.37 1.768.094.347-8.997 70.08-.177.31-1.77 1.375-.347.094-38.852-4.98-.312-.18-1.37-1.781-.092-.345 8.997-70.073.178-.312 1.363-1.05.413-.318zm.42.86-.26.2-1.209.932-8.948 69.688 1.133 1.473 38.464 4.932 1.463-1.137 8.948-69.695-1.132-1.461-38.46-4.932z" 
                    fill="#746D59"></path>
                    <path 
                    d="m21.042 18.538.346-.094 38.845 4.98-.028.436.333-.257 1.37 1.768.094.347-8.997 70.08-.179.31-1.769 1.369-.347.094-38.845-4.98-.311-.18-1.37-1.775-.093-.345 8.997-70.073.178-.312 1.363-1.05.413-.318zm38.872 5.791-38.453-4.93-.259.2-1.209.93-8.948 69.689 1.132 1.467 38.46 4.932 1.462-1.131 8.948-69.695-1.133-1.462z" 
                    fill="#746D59"></path>
                    <path fill="#746D59" 
                    fill-rule="nonzero" 
                    d="m71.159 11.19-45.26-5.725-6.878 5.331"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="m71.159 11.19-45.26-5.725-6.878 5.331"></path>
                    <path fill="#746D59" 
                    d="M25.611 5.095 25.958 5l45.26 5.725-.118.93-45.068-5.7-6.723 5.212-.575-.741z"></path>
                    <path d="m35.508 53.133-5.07-.638c-.257-.031-.4-.225-.37-.475l.532-4.225c.032-.256.225-.4.476-.369l3.207.407c1.182.15 2.02-.344 2.188-1.7l.232-1.813c.03-.256.225-.4.475-.368l4.476.562c.257.031.4.219.37.475l-3.67 29.174c-.032.256-.22.4-.476.369l-4.564-.575c-.257-.031-.4-.225-.37-.475l2.558-20.35h.006z" 
                    fill="#121212" 
                    fill-rule="nonzero"></path>
                    <path d="m52.546 95.738-1.77 1.368-38.845-4.98-1.37-1.776 8.998-70.073 1.363-1.05.413-.319L60.18 23.89l1.369 1.768-8.997 70.08h-.006zM64.294 16.52l-45.267-5.725-6.877 5.331-9.685 76.498L7.798 99.5l45.26 5.724 6.878-5.33 9.678-76.498-5.327-6.875h.007z" 
                    fill="#FFF" 
                    fill-rule="nonzero"></path>
                    <path d="m18.74 10.426.346-.095 45.267 5.725-.028.436.333-.258 5.327 6.875.095.346L60.4 99.953l-.178.311-6.877 5.33-.346.096-45.26-5.725-.312-.178-5.333-6.875L2 92.566l9.685-76.498.178-.311 6.877-5.331zm45.295 6.535-44.874-5.675-6.57 5.093L2.955 92.49 8.05 99.06l44.875 5.677 6.57-5.094 9.63-76.113-5.09-6.568zm-42.987 1.577.346-.094 38.845 4.98.312.179 1.369 1.768.094.347-8.997 70.08-.253.222.069.088-1.77 1.369-.346.094-38.846-4.98-.311-.18-1.37-1.775-.093-.345 8.997-70.073.179-.312 1.362-1.05.413-.318zm.42.86-.26.2L20 20.53l-8.947 69.688 1.132 1.467 38.46 4.932 1.468-1.137 8.947-69.689-1.131-1.461-38.46-4.932z" 
                    fill="#746D59"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="m172.208 79.5-45.267-5.724-6.87 5.33-9.686 76.5 5.334 6.867 45.266 5.725 6.871-5.33 9.678-76.499z"></path>
                    <path d="m126.654 73.405.346-.094 45.267 5.725.311.177 5.327 6.869.095.346-9.679 76.498-.177.31-6.871 5.332-.347.095-45.267-5.725-.31-.178-5.334-6.868-.095-.347 9.685-76.497.178-.312 6.871-5.33zm.421.86-6.564 5.093-9.636 76.112 5.095 6.563 44.88 5.675 6.565-5.093 9.63-76.112-5.09-6.562-44.88-5.676z" fill="#746D59"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="m172.208 79.582-6.878 5.33 5.333 6.87 6.877-5.332z"></path>
                    <path d="m165.043 84.543 6.877-5.332.658.083 5.333 6.869-.083.658-6.878 5.33-.658-.082-5.332-6.869.083-.657zm.945.453 4.758 6.128 6.136-4.757-4.757-6.128-6.137 4.757z" 
                    fill="#746D59"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="m167.856 162.867-6.877 5.33 9.678-76.497 6.877-5.33z"></path>
                    <path d="m171.098 91.952-9.513 75.182 5.83-4.519 9.512-75.182-5.829 4.519zm-.729-.622 6.878-5.331.753.429-9.679 76.498-.178.31-6.878 5.332-.752-.429 9.68-76.498.176-.311z" 
                    fill="#746D59"></path>
                    <path d="m165.33 84.832-45.266-5.725-6.877 5.33-9.68 76.499 5.334 6.874 45.26 5.725 6.878-5.331 9.678-76.498-5.327-6.874zm-11.748 79.217-1.77 1.368-38.845-4.981-1.369-1.776 8.997-70.072 1.364-1.05.412-.319 38.845 4.981 1.37 1.769-8.998 70.08h-.006z" 
                    fill="#E9E7D4" 
                    fill-rule="nonzero"></path>
                    <path d="m119.777 78.736.346-.094 45.266 5.725.312.178 5.326 6.874.096.346-9.68 76.498-.178.311-6.877 5.332-.346.094-45.26-5.724-.311-.178-5.334-6.875-.095-.346 9.679-76.498.178-.312 6.878-5.33zm.42.86-6.57 5.093-9.63 76.113 5.095 6.568 44.875 5.676 6.57-5.093 9.63-76.113-5.089-6.568-44.88-5.676zm1.887 7.252.346-.094 38.846 4.981.311.178 1.37 1.769.093.347-8.996 70.08-.253.22.068.09-1.77 1.368-.346.094-38.846-4.98-.31-.179-1.37-1.775-.093-.346 8.996-70.073.18-.312 1.361-1.05.413-.318zm.42.86-1.469 1.132-8.947 69.688 1.132 1.467 38.46 4.932 1.469-1.137 8.947-69.688-1.132-1.462-38.46-4.931z" 
                    fill="#746D59"></path>
                    <path fill="#FFF" 
                    fill-rule="nonzero" 
                    d="m162.579 93.969-8.997 70.08-1.77 1.374-38.851-4.981-1.369-1.782 8.997-70.072 1.362-1.05.414-.319L161.21 92.2z"></path>
                    <path d="m122.078 86.848.346-.094 38.845 4.981.311.178 1.37 1.769.094.347-8.997 70.08-.177.309-1.77 1.375-.347.095-38.852-4.98-.312-.18-1.368-1.781-.095-.346 8.998-70.073.18-.311 1.774-1.369zm.42.86-1.469 1.132-8.947 69.689 1.132 1.473 38.465 4.931 1.463-1.136 8.948-69.695-1.132-1.461-38.46-4.932z" 
                    fill="#746D59"></path>
                    <path 
                    d="M138.051 112.193c6.04.756 9.935 4.594 9.21 10.337-.763 6.082-5.208 8.313-11.435 8.688-3.933.238-5.834.68-6.284 4.269l-.174 1.393 15.667 1.969c.256.031.4.218.37.475l-.532 4.225c-.031.256-.226.4-.476.369l-20.826-2.62c-.256-.03-.4-.224-.368-.474l.687-5.45c.85-6.756 5.058-8.843 12.249-9.056 3.444-.081 5.163-1.837 5.482-4.375.3-2.363-1.219-4.312-4.345-4.706-3.507-.438-5.54 1.062-6.283 3.925-.075.25-.263.394-.519.362l-4.564-.574c-.257-.032-.4-.219-.326-.469 1.439-5.95 5.74-9.144 12.455-8.3l.012.012z" 
                    fill-rule="nonzero"></path>
                    <path d="m122.078 86.848.346-.094 38.845 4.981-.027.436.332-.258 1.37 1.769.094.347-8.997 70.08-.179.31-1.768 1.368-.348.094-38.845-4.98-.312-.179-1.368-1.775-.095-.346 8.998-70.073.18-.311 1.774-1.369zm38.873 5.792-38.454-4.931-1.468 1.131-8.947 69.688 1.132 1.467 38.46 4.932 1.462-1.13 8.946-69.695-1.131-1.462z" 
                    fill="#746D59"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="m172.208 79.5-45.267-5.724-6.877 5.33"></path>
                    <path fill="#746D59" 
                    d="m126.654 73.405.346-.094 45.267 5.725-.118.93-45.074-5.701-6.724 5.212-.574-.74z"></path>
                    <path fill="#121212" 
                    fill-rule="nonzero" 
                    d="m172.208 79.5-45.267-5.724-6.877 5.33"></path>
                    <path fill="#746D59" 
                    d="m126.654 73.405.346-.094 45.267 5.725-.118.93-45.074-5.701-6.724 5.212-.574-.74z"></path>
                    <path d="m99.335 85.444-18.7 14.494-1.533-1.976 18.7-14.493z"></path>
                    <path d="m95.48 101.816-14.5-18.693 1.977-1.532 14.499 18.693z"></path>
                </g>
            </svg>
            <div className="section-text">
                <p>
                    Події, за які ви проголосували, які 
                    в прямому ефірі, або скоро розпочнуться, 
                    показуватимуться тут
                </p>
            </div>
        </div>
    </div>
  )
}

export default Predictions
