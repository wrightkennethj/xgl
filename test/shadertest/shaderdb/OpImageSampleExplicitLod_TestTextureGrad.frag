#version 450

layout(set = 0, binding = 0) uniform sampler1D  samp1D;
layout(set = 1, binding = 0) uniform sampler2D  samp2D[4];

layout(set = 2, binding = 0) uniform Uniforms
{
    int index;
};

layout(location = 0) out vec4 fragColor;

void main()
{
    vec4 f4 = textureGrad(samp1D, 1.0, 2.0, 3.0);
    f4 += textureGrad(samp2D[index], vec2(4.0), vec2(5.0), vec2(6.0));

    fragColor = f4;
}