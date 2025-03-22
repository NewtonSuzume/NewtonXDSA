#version 330 core

out vec4 out_color;

in vec3 col;
in vec2 tex_coord;

uniform sampler2D albedo;

void main() {
    
    out_color = vec4(col,1)*texture(albedo, tex_coord);
}