import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Task, TaskStatuses } from "./tasks.entity";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {

    @Get()
    async getTasks() {
        return this.taskService.getTasks();
    }

    @Put(":taskId/status/:statusId")
    async statusChange(@Param('taskId', new ParseIntPipe()) taskId: number, @Param('statusId', new ParseIntPipe()) status: TaskStatuses) {
        this.taskService.statusChange(taskId, status);
    }

    @Post()
    async addTask(@Body() item: Task) {
        return this.taskService.addTask(item);
    }

    @Delete(":id")
    async removeTask(@Param("id", new ParseIntPipe()) taskId: number) {
        this.taskService.removeTask(taskId);
    }

    constructor(private taskService: TasksService) { }
}
