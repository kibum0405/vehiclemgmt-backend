package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class RegisterDrivingLogCommand {

    private String registrationId;
    private String vehicleNumber;
    private Date registrationDate;
    private String departure;
    private String departureTime;
    private Integer accumulatedDistanceBefore;
    private String destination;
    private String arrivalTime;
    private Integer accumulatedDistanceAfter;
    private Double drivingDistance;
    private Purpose purpose;
    private Period period;
}
