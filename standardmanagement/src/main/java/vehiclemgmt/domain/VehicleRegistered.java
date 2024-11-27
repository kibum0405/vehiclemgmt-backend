package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class VehicleRegistered extends AbstractEvent {

    private Long id;
    private String registrationNumber;
    private String make;
    private String model;
    private Integer year;
    private VehicleStatus status;

    public VehicleRegistered(Vehicle aggregate) {
        super(aggregate);
    }

    public VehicleRegistered() {
        super();
    }
}
//>>> DDD / Domain Event
