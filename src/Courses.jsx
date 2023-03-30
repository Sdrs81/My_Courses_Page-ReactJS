import Course from "./Course"

function Courses({courses, removeCourse}) {
    return ( <div>
        <div>
            <h2>Kurslarım</h2>
        </div>
        <div>
            {courses.map((course, index) =>{
                return (
                <Course key={course.id} {...course} removeOneCourse={removeCourse}/>  // With this, we can directly send props with their names.  
                );
            })}
        </div>
    </div> );
}

export default Courses;