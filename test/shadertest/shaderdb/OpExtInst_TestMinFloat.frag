#version 450

layout(binding = 0) uniform Uniforms
{
    float f1_1, f1_2;
    vec3 f3_1, f3_2;
};

layout(location = 0) out vec4 fragColor;

void main()
{
    float f1_0 = min(f1_1, f1_2);

    vec3 f3_0 = min(f3_1, f3_2);

    fragColor = (f1_0 != f3_0.x) ? vec4(0.0) : vec4(1.0);
}