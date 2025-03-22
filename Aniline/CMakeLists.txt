cmake_minimum_required(VERSION 3.12)
cmake_policy(SET CMP0076 NEW)

project(Aniline C CXX) 

set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 11)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/$<CONFIGURATION>")
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/$<CONFIGURATION>")


add_subdirectory(./libs/glm EXCLUDE_FROM_ALL)
add_subdirectory(./libs/sdl EXCLUDE_FROM_ALL)

find_package(OpenGL)

include_directories(${CMAKE_SOURCE_DIR}/libs/imgui)
include_directories(${CMAKE_SOURCE_DIR}/libs/imgui/backends)
include_directories(${CMAKE_SOURCE_DIR}/engine)


#add the main executable file
add_executable(Aniline main.cpp)

#tell cmake to compile these files along with the main executable
target_sources(Aniline 

    #imgui
    PUBLIC ${CMAKE_SOURCE_DIR}/libs/imgui/imgui.cpp
    PUBLIC ${CMAKE_SOURCE_DIR}/libs/imgui/imgui_draw.cpp
    PUBLIC ${CMAKE_SOURCE_DIR}/libs/imgui/imgui_tables.cpp
    PUBLIC ${CMAKE_SOURCE_DIR}/libs/imgui/imgui_widgets.cpp
    PUBLIC ${CMAKE_SOURCE_DIR}/libs/imgui/imgui_demo.cpp

    #imgui implementations
    PUBLIC ${CMAKE_SOURCE_DIR}/libs/imgui/backends/imgui_impl_opengl3.cpp
    PUBLIC ${CMAKE_SOURCE_DIR}/libs/imgui/backends/imgui_impl_sdl3.cpp


)

#gl mathematics
target_link_libraries(Aniline PUBLIC glm)

#sdl
target_link_libraries(Aniline PUBLIC SDL3::SDL3)

#opengl
target_link_libraries(Aniline PUBLIC ${OPENGL_LIBRARIES})
target_include_directories(Aniline PUBLIC ${OPENGL_INCLUDE_DIR})

#regular engine headers
target_include_directories(
    Aniline
    PRIVATE
    {$CMAKE_SOURCE_DIR}/engine
)




