function print_course_list(course_list){
    for(var i=0;i<course_list.length;i++)
    {
            var course_type = "Optional";
        $("table").append("<tr>" +
                                "<td>"+course_list[i].name+"</td>" +
                                "<td>"+course_list[i].teacher+"</td>" +
                                "<td>"+course_list[i].id+"</td>" +
                                "<td>"+course_list[i].class_room+"</td>" +
                                "<td>"+course_list[i].score+"</td>" +
                           "</tr>");
    }
}
function course(id,name,teacher,class_room,required) {
    this.id=id;
    this.name=name;
    this.teacher=teacher;
    this.class_room=class_room;
    this.score=score;
}
