import 'reflect-metadata';
import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParam,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { Staff } from '../entities/staffs';
import { StaffService } from '../services/StaffService';

@JsonController('/staffs')
export class StaffController {
  @Inject() staffService: StaffService;

  @Get()
  getStaffs(
    @QueryParam('offset') offset: number,
    @QueryParam('limit') limit: number
  ): Promise<{ data: Staff[]; count: number }> {
    return this.staffService
      .findAndCount({ offset, limit })
      .then(([data, count]) => {
        return { data, count };
      });
  }

  @Get('/:id')
  getStaff(@Param('id') id: number): Promise<Staff> {
    return this.staffService.findOne(id);
  }

  @Post()
  createStaff(@Body() staff: any) {
    this.staffService.insert(staff);
  }

  @Put('/:id')
  saveStaff(@Param('id') id: number, @Body() staff: any) {
    staff.id = id;
    return this.staffService.update(staff);
  }

  @Delete('/:id')
  deleteStaff(@Param('id') id: number) {
    return this.staffService.delete(id);
  }
}
