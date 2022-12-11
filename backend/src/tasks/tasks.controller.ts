import { Controller, Get, Param, ParseIntPipe, Put } from "@nestjs/common";
import { TaskStatuses } from "./tasks.entity";
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

    constructor(private taskService: TasksService) { }
}
