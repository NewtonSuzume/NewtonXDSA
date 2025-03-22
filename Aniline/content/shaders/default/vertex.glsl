#version 330 core

layout(location = 0) in vec4 vertex;
layout(location = 1) in vec4 normal;
layout(location = 2) in vec2 texture_coordinate;


uniform mat4 pvMatrix;
uniform mat4 model;


uniform vec3 color;

out vec3 col;
out vec2 tex_coord;

void main() {

    tex_coord = texture_coordinate;
    col = color;
    gl_Position = pvMatrix*model*vertex;

}